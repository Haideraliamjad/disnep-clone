import "./Brand.css"
function Brand({images}) 
{
    return (<div className="brand-box">
                <img src={images} className="brand-images" alt="images-brand" />
            </div>);

}
export default Brand