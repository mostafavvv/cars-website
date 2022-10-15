import React from 'react'
import { Col } from 'reactstrap'
import "../../styles/blog-item.css"
import { Link } from 'react-router-dom'
import blogData from '../../assets/data/blogData'
const BlogList = () => {
  return (
    <>
      {blogData.map(item => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  )
}
const BlogItem = ({item}) => {
    const {imgUrl,title,date,description,author,time} = item
    return(
        <Col lg='4' md='4' sm='6' className='mb-5'>
            <div className="bolg__item ">
                <img src={imgUrl} className='w-100' alt='' />
                <div className="blog__info p-3">
                    <Link to={`/blogs/${title}`} className="blog__title">{title}</Link>
                    <p className='section__description mt-3'>
                        {
                            description.length > 120 ? description.substr(0,100) : description
                        }
                    </p>
                    <Link className='read__more' to={`/blogs/${title}`}>Read More</Link>
                    <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        <span className='blog__author'>
                            <i className="ri-user-line"></i>{author}
                        </span>
                        <div className="d-flex align-items-center gap-3">
                            <span className='d-flex align-items-center gap-1 section__description'>
                                <i className='ri-calender-line'></i> {date}
                            </span>
                            <span className='d-flex align-items-center gap-1 section__description'>
                                <i className='ri-time-line'></i> {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default BlogList
