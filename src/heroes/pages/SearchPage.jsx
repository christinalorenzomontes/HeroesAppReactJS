import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = () => {
    event.preventDefault();
    if( searchText.trim().length <= 1 ) return;
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

    <div className="row">
      <div className="col-5">
        <h2>Searching</h2>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input 
            type="text" 
            placeholder="Search a hero" 
            className="form-control" 
            name="searchText" 
            autoComplete="off" 
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>
      </div>

      <div className="col-7">
        <h2>Results:</h2>
        <hr />
        <div className="alert alert-primary">
          Search a hero
        </div>
        <div className="alert alert-danger">
          No hero with <b>{ q }</b>
        </div>
        {
          heroes.map( hero => (
            <HeroCard key={ hero.id } {...hero} />
          ))
        }
      </div>
    </div>
    </>
  )
}
