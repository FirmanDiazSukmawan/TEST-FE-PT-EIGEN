import { FireOutlined } from '@ant-design/icons'
import { Card, Space, Typography } from 'antd'
import type { Article } from '~/utils/type'
import { getDate } from './function/getDate'
import { cleanContent } from '~/utils/helper/cleanContent'
import { motion } from 'framer-motion';
import { cardVariants, imageVariants, itemVariants, textVariants } from './VariantFramer/VariantFramer'
import { useNavigate } from 'react-router'
import useArticleStore from '~/utils/zustand/detailArticle'
import { convertSlug } from '~/utils/slug/slug'

type Props = {
    article: Article
    loading: boolean
}

const { Paragraph } = Typography;



const CardList = ({ article, loading }: Props) => {
    const navigate = useNavigate();
  const setSelectedArticle = useArticleStore((state) => state.setSelectedArticle);

  const handleClick = () => {
    setSelectedArticle(article);
   const name = article.title;
  const slug = convertSlug(name);

  navigate(`/detail/${slug}`);
    // console.log(article)
  };
    return (
        <motion.div 
        onClick={handleClick}
            variants={itemVariants} 
            className='px-2 py-2'
            whileHover="hover"
            whileTap="tap"
        >
            <motion.div
                variants={cardVariants}
                className='h-full'
            >
                <Card
                    loading={loading}
                    hoverable
                    className='flex flex-col h-full'
                    cover={
                        <motion.div
                            variants={imageVariants}
                            className='overflow-hidden'
                        >
                            <img 
                                alt={article.url} 
                                src={article.urlToImage} 
                                className='h-[160px] w-full object-cover'
                            />
                        </motion.div>
                    }
                    actions={[
                        <motion.div 
                            variants={textVariants}
                            key="source"
                        >
                            <Space className='truncate max-w-[110px]' size={3}>
                                {article?.source?.name}
                            </Space>
                        </motion.div>,
                        <motion.div 
                            variants={textVariants}
                            key="date"
                        >
                            <Space className='truncate max-w-[110px]' size={3}>
                                <FireOutlined /> {getDate(article?.publishedAt)}
                            </Space>
                        </motion.div>,
                    ]}
                >
                    <motion.div
                        variants={textVariants}
                    >
                        <Card.Meta
                            title={
                                <div className="whitespace-normal font-medium">
                                    {article?.title}
                                </div>
                            }
                            description={
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={textVariants}
                                >
                                    {article?.description || "No Description"}
                                </motion.div>
                            }
                            className='flex flex-col gap-4'
                        />
                    </motion.div>
                    
                    <motion.div
                        variants={textVariants}
                    >
                        <Paragraph ellipsis={{ rows: 3 }} className='text-gray-600'>
                            {cleanContent(article.content)}
                        </Paragraph>
                    </motion.div>
                </Card>
            </motion.div>
        </motion.div>
    )
}

export default CardList