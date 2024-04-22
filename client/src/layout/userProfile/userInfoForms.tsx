import PersonalInfo from "../../components/userProfileForms.tsx/personalInformation";
import EmploymentInfo from "../../components/userProfileForms.tsx/employmentInformation";
import ContactInfo from "../../components/userProfileForms.tsx/contactInformation";


const UserInfoForms: React.FC = () => {


  
  return (
    <>
      <PersonalInfo />
      <EmploymentInfo />
      <ContactInfo />
    </>
  );
};

export default UserInfoForms;
