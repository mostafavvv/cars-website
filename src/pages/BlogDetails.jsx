import React,{useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container,Row ,Col,Form,FormGroup , Input } from 'reactstrap'
import blogData from '../assets/data/blogData'
import Helmet from '../components/Helmet/Helmet'

import commentImg from "../assets/all-images/ava-1.jpg"
import "../styles/blog-details.css"

const BlogDetails = () => {
const {slug} = useParams()
  const blog = blogData.find(blog => blog.title === slug)

  useEffect(() => {
   window.scrollTo(0,0)
  }, [blog])
  return (
    <Helmet title="Blog Details">
     <section>
     <Container >
        <Row>
          <Col lg="8" md="8" >
            <div className="blog__details">
              <img  src={blog.imgUrl} alt="" className='w-100' />
              <h2 className='section__title mt-4'>{blog.title}</h2>
              <div className="blog__publisher d-flex align-items-center gap-4 mb-4 ">
                <span className='blog__author'>
                    <i className="ri-user-line"></i>{blog.author}
                </span>

                    
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-calender-line'></i> {blog.date}
                  </span>
                  <span className='d-flex align-items-center gap-1 section__description'>
                    <i className='ri-time-line'></i> {blog.time}
                  </span>
              </div>
              <p className='section__description'>{blog.description}</p>
              <h6 className='ps-5 fw-normal'>
                {" "}
                <blockquote className='fs-4'>{blog.quote}</blockquote>
                </h6>
                <p className='section__description'>{blog.description}</p>
            </div>
            <div className="comment__list mt-5">
              <h4 className='mb-5'>3 Comemnts</h4>

              <div className="single__comment d-flex gap-3">
                <img src={commentImg} alt=""  />
              <div className='comment__content'>
                <h6 className='fw-bold'>David Visa</h6>
                <p className='section__description mb-0'>14 july,2022</p>
                <p className='section__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa rerum accusamus corporis eum distinctio doloribus, maiores necessitatibus illum. Ipsam libero a provident earum in consequatur velit deleniti quod nihil! Aut!</p>
                <span className='replay d-flex align-items-center gap-1'><i className='ri-reply-line'></i>Replay</span>

              </div>
              </div>

              {/*  commet form  */}
              <div className="leave__comment-form mt-5">
                <h4>Leave a Comment</h4>
                <p className='section__description'> You must sigm-in to make or comment a post </p>

                <Form>
                  <FormGroup className='d-flex gap-3'>
                    <Input type="text" placeholder='Full name' />
                    <Input type="email" placeholder='email' />
                  </FormGroup>
                  <FormGroup>
                    <textarea  rows="5" className='w-100 py-2 px-3' placeholder='Comment...'></textarea>
                  </FormGroup>
                  <button className="btn comment mt-3">
                    Post a Comment
                  </button>
                </Form>
              </div>

              
            </div>
          </Col>
          <Col lg='4' md='4'>
            <div className="recent__post mb-4">
              <h5 className='fw-bold'>Recent Posts</h5>
            </div>
            {
              blogData.map(item => (
                <div className='recent__blog-post mb-4' key={item.id}> 
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className='w-25' />
                    <h5><Link to={`/blogs/${item.title}`}>{item.title}</Link></h5>

                  </div>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
     </section>
      </Helmet>
  )
}

export default BlogDetails