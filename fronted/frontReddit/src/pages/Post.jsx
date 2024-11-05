import PostContent from '../components/others/PostContent';
import SideBar from '../components/others/SideBar';
<PostContent />

const Post = () => {
  return (
    <div className="container-fluid px-3 py-3">
      <div className="row">
        <div className="col-md-8">
          <PostContent />
        </div>
        <div className="col-md-4">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Post;



