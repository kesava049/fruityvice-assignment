'use client'
import { useState } from 'react'
import './globals.css'

export default function Home(){
  const [url, setUrl] = useState('api/fruit/all');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState("");

const handleFetch = async () => {
  if (!url) {
    setResponse("Please enter a valid url");
    return;
  }

  const api = `/api/fruits?path=${url}`;

  try {
    const res = await fetch(api, { method });
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  } catch (err) {
    setResponse("❌ Error fetching data: " + err);
  }
};

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submit/reload
      handleFetch();
    }
  };

  return(
    <div id="wrapper" className="divided">
      <section className="sectionone">
        <div className='content'>
          <h1 className='heading'>Fruityvice</h1>
          <p className='paragraph'>A powerful webservice which provides data for all kinds of fruit! You can use Fruityvice to find out interesting information about fruit and educate yourself. The webservice is completely free to use and contribute to.</p>
          <ul className='actionsstacked'>
            <li>
              <a href="#1" className="buttonstyle" id="scroller-to-functions">Get Started</a>
            </li>
          </ul>
        </div>
        <div className='image'>
          <div className='container'>
            <img src="https://www.fruityvice.com/images/cherry.png" alt="cherrys"></img>
            <div className='middle'>
              <div
                className="text"
                onClick={() => window.open('https://pixabay.com/de/users/julieta_masc-5768105/?tab=latest', 'mywindow')}
                style={{ cursor: 'pointer' }}
              >
                Artist: J. M.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sectiontwo'>
        <div className='content'>
          <h2 className='heading2'>What functions does it provide?</h2>
          <p className='paragraph'>With Fruityvice you can receive interesting data from any fruit of your choosing. On top of that you can add fruits by yourself as well! Added fruits will first have to be approved by an admin to avoid any errors in the data. The shown data is based on 100 grams of the listed fruit. The owner does not guarantee the available data is 100% flawless, however he will do his best to fix any wrong data.</p>
          <ul className='actionsstacked'>
            <li>
              <a href="#2" className="buttonstyle" id="scroller-to-functions">LEARN MORE</a>
            </li>
          </ul>
        </div>
        <div className='image2'>
          <div className='container'>
            <img src="https://www.fruityvice.com/images/watermelon.png" alt="cherrys"></img>
            <div className='middle'>
              <div
                className="text"
                onClick={() => window.open('https://pixabay.com/de/users/julieta_masc-5768105/?tab=latest', 'mywindow')}
                style={{ cursor: 'pointer' }}
              >
                Artist: J. M.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sectionthree'>
        <div className='content'>
          <h2 className='heading2'>How does it work?</h2>
          <p className='paragraph'>Currently the webservice consists of two functions: receiving data for a specific fruit or all fruit, 
              and a function to add your own data. An example of what the response body would look like can be seen on the 
              right. To receive the shown data, you have to make a <b className="bolt">HTTP GET</b> call on the resource
              <b className="bolt"> /api/fruit/ID</b> or
              <b className="bolt">/api/fruit/name</b> of this website's IP. To add data, make a <b className="bolt">HTTP PUT</b>
                call on the resource <b className="bolt">/api/fruit</b> with 
                the data of a fruit in JSON format in the request body. An ID does not have to be provided. A 
                full documentation for the REST API can be found <a href="https://www.fruityvice.com/doc/index.html">here.</a>
          </p>
          <ul className='actionsstacked'>
            <li>
              <a href="#3" className="buttonstyle" id="scroller-to-http">TRY IT</a>
            </li>
          </ul>
        </div>
        <div className='imagec3'>
            <img className="image3" src="https://www.fruityvice.com/images/apiexample.png" alt="response"></img>
        </div>
      </section>
      <section className='sectionfour'>
        <div className='content'>
          <div className='wrapper'>
            <div className="field1" id="first">
              <label className='label' htmlFor="method">Method</label>
              <select 
                className="selection"
                name="method"
                id="method"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option className='option' value="GET">GET</option>
                <option className='option' value="PUT">PUT</option>
              </select>
            </div>
            <div className="field2" id="second">
              <label className='label' htmlFor="email">Resource</label>
              <input 
                className='input' 
                type="text" 
                name="fruit" 
                id="fruit" 
                value={url}
                onChange={(e)=>{setUrl(e.target.value)}}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <br/>
          <div className='field'>
            <label className='label' htmlFor="message" id="messagelabel">Response</label>
            <textarea 
              className="textarea"
              name="message"
              id="message"
              rows={12}
              value={response}
              readOnly
            ></textarea>
          </div>
        </div>
      </section>
    </div>
  )
}


//https://www.fruityvice.com/api/fruit/apple



