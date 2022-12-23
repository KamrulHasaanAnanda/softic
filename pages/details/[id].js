import { Typography } from "antd";
import { Grid } from "antd";
import { Image } from "antd";
import { Card } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMergedData } from "../../redux/actions/staticBarActions";

function Index() {
   const { useBreakpoint } = Grid;
   let {xs} =  useBreakpoint();

  let { query } = useRouter();
  const [data, setData] = useState(null);
  const mergeData = useSelector((state) => state.staticBar.data);

  const dispatch = useDispatch();

  //   console.log("id", query);/

  useEffect(() => {
    // getValues();
    // setloading(true);
    dispatch(setMergedData());
  }, [dispatch]);

  useEffect(() => {
    if (mergeData?.length > 0) {
      // console.log('mergeData', mergeData)
      let singleData = mergeData.filter((item) => item.id == query.id);
      setData(singleData);
      // console.log('singleData', singleData)
    }
  }, [mergeData, query.id]);
//   console.log("data", data);

  return (
    <div className="single-card">
      {data?.length > 0 && (
        <Card title={data[0]?.title} style={{width: xs ? "100%" :"50%"}}>
          <Image
            src={data[0]?.photos?.url}
            alt=""
            width={"100%"}
            height={200}
            style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />

          <div className="author">
            <Image
              src={data[0]?.photos?.thumbnailUrl}
              alt=""
              style={{ height: 40, width: 40, borderRadius: "50%" }}
            />
            <div className="author-texts">
              <Typography.Title level={4}>
                {data[0]?.user?.name}
              </Typography.Title>
            </div>


          </div>

          <Typography.Title level={4}>Comments</Typography.Title>
            {data[0]?.comment?.length > 0 &&

                data[0]?.comment?.map((item, index) => (
                    <div className="comment" key={index}>
                        <Typography.Title level={5}>{item.name}</Typography.Title>
                        <Typography.Text>{item.body}</Typography.Text>
                    </div>
                ))
            }
        </Card>
      )}
    </div>
  );
}

export default Index;
