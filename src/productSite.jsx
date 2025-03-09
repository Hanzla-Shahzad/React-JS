import { useEffect, useState } from "react";
export default function ProductSite() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  async function Products() {
    try {
      let respone = await fetch("https://dummyjson.com/products");
      let data = await respone.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  }
  useEffect(() => {
    Products();
  }, []);
  // console.log(Products);
  if (loading) {
    return (
      <div className="text-center">
        <div
          className="spinner-border mx-auto"
          style={{ fontSize: "50px" }}
          role="status"
        >
          <span className="visually-hidden">{loading}</span>
        </div>
      </div>
    );
  }

  let getProduct = product.filter((val) => {
    return (
      val.title.toLowerCase().includes(search.toLowerCase()) ||
      Math.round(val.price) - Math.round((40 / 100) * val.price) ===
        Number(search)
    );
  });

  return (
    <>
      <input
        type="text"
        value={search}
        className="row mx-auto w-25 mt-4 fixed-top"
        style={{
          border: "none",
          borderBottom: "2px solid black",
          boxShadow: "7px 14px 42px 3px rgba(98, 117, 135, 0.4)",
        }}
        placeholder="Enter items as you like"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="row card-demo mt-5 pt-5 d-flex justify-content-center">
        {product.length > 0 && getProduct.length > 0 ? (
          getProduct.map((products) => (
            <div
              className="col-lg-3 col-md-5 col-sm-11 card m-1"
              key={products.id}
            >
              <div className="card-image-top">
                <img src={products.thumbnail} alt="" />
              </div>
              <div
                className="card-body w-100"
                style={{ backgroundColor: "rgb(243 243 243)" }}
              >
                <h5
                  className="card-title d-flex flex-wrap"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "lighter",
                    fontFamily: "sans-serif",
                  }}
                >
                  {products.title}
                </h5>
                <h6 className="card-text">Rating {products.rating}</h6>
                <h6
                  className="fs-5"
                  style={{
                    color: "gray",
                    fontFamily: "fantesy",
                    fontWeight: "bolder",
                  }}
                >
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontSize: "13px",
                      fontWeight: "bolder",
                    }}
                  >
                    {" "}
                    RS {Math.round(products.price)}
                  </span>{" "}
                  RS{" "}
                  {Math.round(products.price) -
                    Math.round((40 / 100) * products.price)}
                  <button
                    type="button"
                    className="btn btn-warning text-white ms-3"
                    style={{ fontSize: "13px", borderRadius: "35px" }}
                  >
                    Save 40%
                  </button>
                </h6>
                <button type="button" className="btn btn-success">
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No product found</h1>
        )}
      </div>
    </>
  );
}
