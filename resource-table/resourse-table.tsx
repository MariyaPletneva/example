import React, { FC } from "react";
import { Spin, Table } from "antd";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { FilterComponent } from "@/components/filter";
import { TabsComponent } from "@/components/tabs";
const ResourceTableBase: FC = () => {
  const { data, loading } = useTypedSelector((state) => state.resource);
  //...
  return (
    <>
      <FilterComponent />
      <TabsComponent />
      <Table
        rowKey="id"
        dataSource={data}
        scroll={{ y: "calc(100vh - 11em)", x: 2000 }}
        pagination={false}
        loading={{
          indicator: <Spin size="large" />,
          spinning: loading,
        }}
      />
    </>
  );
};

export const ResourceTable = React.memo(ResourceTableBase);
