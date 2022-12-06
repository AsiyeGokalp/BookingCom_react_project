import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const  {data, loading,error} = useFetch("/hotels/countByCity?cities=Amsterdam,Rotterdam,Zwolle")
  
  return (
    <div className="featured">
      {loading ? ("Loading please wait!" ) : (
        <>
        
      <div className="featuredItem">
        <img
          src="https://www.travelandleisure.com/thmb/FVnQw8F6k79tsfS4TPAxQuICwic=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/amsterdam-nl-AMSTERDAMTG0521-6d2bfaac29704667a950bcf219680640.jpg"
          alt=""
          className="featuredImg"
        />
        
        <div className="featuredTitles">
          <h1>Amsterdam</h1>
          <h2>{data[0]}properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Erasmusbrug_seen_from_Euromast.jpg/1920px-Erasmusbrug_seen_from_Euromast.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rotterdam</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://uploads-ssl.webflow.com/615eaacc14cfbc51c37f5e24/62ffa202475adfc875971d36_Zwolle%2BPeperbus.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Zwolle</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
      )
      }
    </div>
  );
};

export default Featured;