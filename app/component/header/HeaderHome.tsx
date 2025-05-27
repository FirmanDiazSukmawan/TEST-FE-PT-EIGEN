import React from 'react'
import {motion} from "framer-motion"
import { BookOutlined } from '@ant-design/icons'
import { Divider, Space, Typography } from 'antd'
import { itemVariants } from '../VariantFramer/VariantFramer';

const {Title,  Paragraph } = Typography;

const HeaderHome = () => {
  return (
   <motion.div variants={itemVariants}>
        <Title level={2} className='text-center'>
          <Space>
            <BookOutlined />
            Latest Articles
          </Space>
        </Title>
        <Paragraph type="secondary" className='text-center'>
          Stay updated with the latest General Country Trends
        </Paragraph>
        <Divider />
      </motion.div>
  )
}

export default HeaderHome