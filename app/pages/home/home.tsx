import React, { useEffect, useRef, useState } from 'react';
import { List, Button, Spin } from 'antd';
import { motion } from 'framer-motion';
import { containerVariants } from '~/component/VariantFramer/VariantFramer';
import CardList from '~/component/CardList';
import HeaderHome from '~/component/header/HeaderHome';
import useNewsStore from '~/utils/zustand/getListArticle';
import { RedoOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
const { articles, loading, totalResults, getData, reset } = useNewsStore();
const [page, setPage] = useState(1);
const hasMounted = useRef(false);



  useEffect(() => {
   if (!hasMounted.current ) {
    reset();
    hasMounted.current = true;
  }
}, []);



  const handleLoadMore = () => {
   const nextPage = page + 1;
   setPage(nextPage);
    getData(nextPage, 9);
  };


  const loadMore = (
  <div
    style={{
      textAlign: 'center',
      marginTop: 12,
      height: 32,
      lineHeight: '32px',
      display: 'flex',
      justifyContent: 'center',
      gap: '16px'
    }}
  >
    {!loading && articles.length < totalResults && (
      <Button 
        onClick={handleLoadMore}
        type="primary"
        shape="round"
        size="large"
      >
        Load More
      </Button>
    )}
    {articles.length > 0 && (
      <Button 
        onClick={reset}
        shape="round"
        size="large"
        icon={<RedoOutlined />}
        danger
      >
        Reset
      </Button>
    )}
  </div>
);

  return (
    <motion.div
      animate="visible"
      variants={containerVariants}
      className="p-6 max-w-[1200px] mx-auto min-h-screen"
    >
      <HeaderHome />
      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          lg: 3,
          column: 3,
        }}
        dataSource={articles}
        renderItem={(article) => <CardList article={article} loading={loading} />}
        loadMore={loadMore} 
        itemLayout='vertical'
        loading={loading}
      />
    </motion.div>
  );
};

export default Home;
