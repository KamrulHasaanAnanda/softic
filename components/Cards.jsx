import { Image } from "antd";
import { Typography } from "antd";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";
import { Tag } from "antd";
import { Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setMergedData } from "../redux/actions/staticBarActions";
import Link from "next/link";

function Cards({ item, comments }) {
  const mergeData = useSelector((state) => state.staticBar.data);
  const dispatch = useDispatch();
  let confirm = (id) => {
    console.log("id", id);
    let newData = mergeData.filter((item) => item.id !== id);
    dispatch(setMergedData(newData));
    console.log("mergeData", newData);
  };
  let cancel = () => {
    // console.log("cancel");
  };
  // console.log('comments', item)
  return (
    <div className="card-item">
      <Image
        src={item?.photos?.url}
        alt=""
        width={"100%"}
        height={200}
        style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      />
      <div style={{ padding: 10 }}>
        <div className="title">
          <Link href={"details/"+item.id}>
          <Typography.Title level={4}>{item?.title}</Typography.Title>
          </Link> 
          <Popconfirm
            title="Delete the blog"
            description="Are you sure to delete this blog?"
            onConfirm={(id) => confirm(item.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined />
          </Popconfirm>
        </div>

        <div className="body">
          <Typography.Text>{item?.body}</Typography.Text>
        </div>
        <div className="author">
          <Image
            src={item?.photos?.thumbnailUrl}
            alt=""
            style={{ height: 40, width: 40, borderRadius: "50%" }}
          />
          <div className="author-texts">
            <Typography.Title level={4}>{item?.user?.name}</Typography.Title>
            <Typography.Title level={4} style={{ marginTop: 2 }}>
              Total comment:<Tag>{comments}</Tag>
            </Typography.Title>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
