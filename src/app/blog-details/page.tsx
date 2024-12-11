import BlogDetails from "@/component/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog Details DUCAT",
};
const index = () => {
   return (
      <Wrapper>
         <BlogDetails />
      </Wrapper>
   )
}

export default index