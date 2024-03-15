import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
  const {
    title,
    author,
    cover,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="blog m-10 p-10 border-solid border-teal-400 rounded-2xl">
     
      <img src={cover} alt="" className="h-3/4 border-2 border-teal-100 rounded-xl" />
      <div>
        <div className="flex justify-between items-center py-5">
          <img src={author_img} alt="" className="w-12 rounded-full "/>
          <div className=" items-center">
            <p>Author:{author}</p>
            <p>Posted:{posted_date}</p>
          </div>
          <p className="flex items-center"><span>{reading_time} min read</span> <button className="ml-2"><CiBookmark /></button></p>

        </div>
        <h2 className="font-bold text-4xl">{title}</h2>
        <p>{hashtags.map((hash,idx)=> <span key={idx}> <a href="">{hash}</a></span>)}</p>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
