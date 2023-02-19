import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css'

function Item() {
  return (
    <Container className='Conntainer'>
      <Row>
        <Col className='Coool'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$300</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
        <Col xs={{ order: 12 }} className='Coool'>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$3000</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
        <Col xs={{ order: 1 }} className='Coool'>
        <img src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$300</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
      </Row>
      <Row>
        <Col className='Coool'>
            <img src="https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$300</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
        <Col xs={{ order: 12 }} className='Coool'>
        <img src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$3000</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
        <Col xs={{ order: 1 }} className='Coool'>
        <img src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"  className="image" alt="" />
            <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</p>
            <h>$300</h>
            <button style={{backgroundColor: 'orange',}}>Buy Now</button>

        </Col>
      </Row>
      <Row>
      <img src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"  className="images" alt="" />
      <p><b>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail</b></p>
          <button className='butos'>Buy Now</button>
      </Row>
    </Container>
  );
}

export default Item;