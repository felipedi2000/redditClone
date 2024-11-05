import CardInfo from "../cards/CardInfo";
import CardRules from "../cards/CardRules";
import CardInfoP from "../cards/CardInfoP";

const SideBar = () => {
    return (
      <div>
        <CardInfo/>
        <br></br>
        <CardRules />
        <br></br>
        <CardInfoP />
      </div>
    );
  };
  
  export default SideBar;