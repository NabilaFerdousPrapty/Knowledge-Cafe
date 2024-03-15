
import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        
        <div className="bg-gray-100 rounded-3xl py-3 my-1 text-black">
            <h3 className="text-3xl text-center">{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object
};
export default Bookmark;