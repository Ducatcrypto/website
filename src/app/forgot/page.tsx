import ResetPassWord from "@/component/reset-password";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Reset PassWord DUCAT",
};
const index = () => {
   return (
      <Wrapper>
         <ResetPassWord />
      </Wrapper>
   )
}

export default index