import './car.style.css'

function CarComponents(props) {
    const {title, image, price, description} = props
    return <div className={'block1'}>
        <div>
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <p className={'description1'}>{description}</p>
            </div>
        <div className={'buyButton'}>
            <p className={'price'}>{price}</p>
            <button>Buy Auto</button>
        </div>

    </div>


}
export default CarComponents