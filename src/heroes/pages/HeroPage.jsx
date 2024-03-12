import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = getHeroById( id );

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src="" 
          alt="" 
          className="img-thumbnail"  
        />
      </div>
    </div>
  )
}
