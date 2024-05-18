
export default function Billing()
{
    return(
        <>
        <table className="table table-striped">
  <thead className="thead-dark text-white">
    <tr className="text-white">
      <th scope="col">S.NO</th>
      <th scope="col">Product</th>
      <th scope="col">price</th>
      <th scope="col">Quality</th>
      <th scope="col">SubTotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
        </>
    )
}

// from Product.js
const ViewSize=()=>{

  const [screenSize, setScreenSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

  })

  return()=>{

  }
}