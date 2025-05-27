import { Button, Typography, Divider, Tag,  Image, Popconfirm  } from 'antd';
import { ArrowLeftOutlined, FireOutlined, ShareAltOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import useArticleStore from '~/utils/zustand/detailArticle';
import { useNavigate, useParams } from 'react-router';
import { getDate } from '~/component/function/getDate';
import useNewsStore from '~/utils/zustand/getListArticle';
import { useEffect } from 'react';
import { containerVariants, itemVariants } from '~/component/VariantFramer/VariantFramer';

const { Title, Paragraph, Text } = Typography;


const DetailPage = () => {
   const article = useArticleStore((state) => state.selectedArticle);
  const navigate = useNavigate();
  const { articles } = useNewsStore();
  
  
 useEffect(() => {
    if (!article) {
      navigate("/");
    }
  }, [article, navigate]);

  if (!article) {
   
    return null;
  }


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 py-8 text-black"
    >
      
      <motion.div variants={itemVariants}>
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          iconPosition='start'
          onClick={() => navigate('/')}
          className="mb-6 -ml-1.5"
          size='small'
          
        >
          Back to List
        </Button>
      </motion.div>

      
      <motion.div variants={itemVariants}>
        <Tag color="blue" className="mb-4">
          {article.source.name || "No have source Name"}
        </Tag>
        <Title level={2} className="mb-2">
          {article.title}
        </Title>
        <div className='flex flex-row mb-6 justify-between'>

          <Text type="secondary">
            <FireOutlined /> Published: {getDate(article.publishedAt)}
          </Text>
           
          <Text type="secondary">
            <UserOutlined /> Author: {article.author || "No Author"}
          </Text>
       
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Image
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-auto rounded-lg mb-8"
          preview={false}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Paragraph className="text-lg mb-6">
          {article.description}
        </Paragraph>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Divider />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Paragraph className="text-base whitespace-pre-line">
          {article.content}
        </Paragraph>
      </motion.div>

     
      <motion.div 
        variants={itemVariants}
        className="flex gap-4 mt-8"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            type="primary" 
            icon={<BookOutlined />}
            className="bg-blue-500"
          >
            Save Article
          </Button>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            icon={<ShareAltOutlined />}
          >
            Share Article
          </Button>
        </motion.div>
      </motion.div>

     
      <motion.div variants={itemVariants} className="mt-12">
        <Title level={4} className="mb-6">
          You Might Also Like
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles
            .slice(0, 3)
            .map((relatedArticle,index) => (
              <Popconfirm
                title="Not Ready yet"
                description="Sooner or later will be ready"
                okText="Close"
                showCancel={false}
              >
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                // onClick={() => {
                //   const name = article.title;
                //   const slug = convertSlug(name);
                //   navigate(`/detail/${slug}`);
                // }}
              >
                <div className="border rounded-lg p-4 h-full flex flex-col justify-between">
                  <div>
                  <img 
                    src={relatedArticle.urlToImage} 
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <Text strong className="block mb-2">{relatedArticle.title}</Text>
                  </div>
                  <Text type="secondary" >{getDate(relatedArticle.publishedAt)}</Text>
                </div>
              </motion.div>
              </Popconfirm>
            ))}
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default DetailPage;