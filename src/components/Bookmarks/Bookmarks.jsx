
import PropTypes from 'prop-types'
import Bookmark  from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-400 text-white">
        <div className='bg-gray-950 text-white text-center'>
            <h2 >Reading:{readingTime}</h2>
        </div>
    <h2 className="text-3xl text-center py-4">Bookmarked Blogs:{bookmarks.length}</h2>
    {
        bookmarks.map(bookmark=><Bookmark key={bookmark.id}  bookmark={bookmark} ></Bookmark>)
      
    }
    
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks