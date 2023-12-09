import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import backgroundImage from './assets/placeholder-photo.png';  // Correct the typo in the import path
import './App.css'

function App() {
  return (
    <>
    <div>
    <div className='spaced'>
      <img className="photo" src={backgroundImage} alt="Placeholder" />
    </div>
      <form action="/update-profile" method="post" enctype="multipart/form-data">
        <div className='spaced'>
          
        <div class="form-group">
          <span>Name</span>
          <input class="form-field" type="text" placeholder="King Arthur" required></input>
        </div>

        <div class="form-group">
          <span>Email</span>
          <input class="form-field" type="text" placeholder="demean_sefu_femeilor69@gmail.com" required></input>
        </div>
        
        <div className='form-group'>
          <span>Birthday</span>
          <input class="form-field" type="date" placeholder="demean_sefu_femeilor69@gmail.com" required></input>
        </div>

        <div className='form-group'>
          <span>Address</span>
          <input class="form-field" type="text" placeholder="Cluj-Napoca" required></input>
        </div>
        
        <div className='form-group'>
          <span>Country</span>
          <select id="country" className="country" name="country">
            <option value="afghanistan">Afghanistan</option>
            <option value="albania">Albania</option>
            <option value="algeria">Algeria</option>
            <option value="andorra">Andorra</option>
            <option value="angola">Angola</option>
            <option value="antigua-and-barbuda">Antigua and Barbuda</option>
            <option value="argentina">Argentina</option>
            <option value="armenia">Armenia</option>
            <option value="australia">Australia</option>
            <option value="austria">Austria</option>
            <option value="azerbaijan">Azerbaijan</option>
            <option value="bahamas">Bahamas</option>
            <option value="bahrain">Bahrain</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="barbados">Barbados</option>
            <option value="belarus">Belarus</option>
            <option value="belgium">Belgium</option>
            <option value="belize">Belize</option>
            <option value="benin">Benin</option>
            <option value="bhutan">Bhutan</option>
            <option value="bolivia">Bolivia</option>
            <option value="bosnia-and-herzegovina">Bosnia and Herzegovina</option>
            <option value="botswana">Botswana</option>
            <option value="brazil">Brazil</option>
            <option value="brunei">Brunei</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="burkina-faso">Burkina Faso</option>
            <option value="burundi">Burundi</option>
            <option value="cabo-verde">Cabo Verde</option>
            <option value="cambodia">Cambodia</option>
            <option value="cameroon">Cameroon</option>
            <option value="canada">Canada</option>
            <option value="central-african-republic">Central African Republic</option>
            <option value="chad">Chad</option>
            <option value="chile">Chile</option>
            <option value="china">China</option>
            <option value="colombia">Colombia</option>
            <option value="comoros">Comoros</option>
            <option value="congo">Congo</option>
            <option value="costa-rica">Costa Rica</option>
            <option value="croatia">Croatia</option>
            <option value="cuba">Cuba</option>
            <option value="cyprus">Cyprus</option>
            <option value="czech-republic">Czech Republic</option>
            <option value="denmark">Denmark</option>
            <option value="djibouti">Djibouti</option>
            <option value="dominica">Dominica</option>
            <option value="dominican-republic">Dominican Republic</option>
            <option value="east-timor">East Timor</option>
            <option value="ecuador">Ecuador</option>
            <option value="egypt">Egypt</option>
            <option value="el-salvador">El Salvador</option>
            <option value="equatorial-guinea">Equatorial Guinea</option>
            <option value="eritrea">Eritrea</option>
            <option value="estonia">Estonia</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="fiji">Fiji</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="gabon">Gabon</option>
            <option value="gambia">Gambia</option>
            <option value="georgia">Georgia</option>
            <option value="germany">Germany</option>
            <option value="ghana">Ghana</option>
            <option value="greece">Greece</option>
            <option value="grenada">Grenada</option>
            <option value="guatemala">Guatemala</option>
            <option value="guinea">Guinea</option>
            <option value="guinea-bissau">Guinea-Bissau</option>
            <option value="guyana">Guyana</option>
            <option value="haiti">Haiti</option>
            <option value="honduras">Honduras</option>
            <option value="hungary">Hungary</option>
            <option value="iceland">Iceland</option>
            <option value="india">India</option>
            <option value="indonesia">Indonesia</option>
            <option value="iran">Iran</option>
            <option value="iraq">Iraq</option>
            <option value="ireland">Ireland</option>
            <option value="israel">Israel</option>
            <option value="italy">Italy</option>
            <option value="ivory-coast">Ivory Coast</option>
            <option value="jamaica">Jamaica</option>
            <option value="japan">Japan</option>
            <option value="jordan">Jordan</option>
            <option value="kazakhstan">Kazakhstan</option>
            <option value="kenya">Kenya</option>
            <option value="kiribati">Kiribati</option>
            <option value="north-korea">North Korea</option>
            <option value="south-korea">South Korea</option>
            <option value="kosovo">Kosovo</option>
            <option value="kuwait">Kuwait</option>
            <option value="kyrgyzstan">Kyrgyzstan</option>
            <option value="laos">Laos</option>
            <option value="latvia">Latvia</option>
            <option value="lebanon">Lebanon</option>
            <option value="lesotho">Lesotho</option>
            <option value="liberia">Liberia</option>
            <option value="libya">Libya</option>
            <option value="liechtenstein">Liechtenstein</option>
            <option value="lithuania">Lithuania</option>
            <option value="luxembourg">Luxembourg</option>
            <option value="macedonia">Macedonia</option>
            <option value="madagascar">Madagascar</option>
            <option value="malawi">Malawi</option>
            <option value="malaysia">Malaysia</option>
            <option value="maldives">Maldives</option>
            <option value="mali">Mali</option>
            <option value="malta">Malta</option>
            <option value="marshall-islands">Marshall Islands</option>
            <option value="mauritania">Mauritania</option>
            <option value="mauritius">Mauritius</option>
            <option value="mexico">Mexico</option>
            <option value="micronesia">Micronesia</option>
            <option value="moldova">Moldova</option>
            <option value="monaco">Monaco</option>
            <option value="mongolia">Mongolia</option>
            <option value="montenegro">Montenegro</option>
            <option value="morocco">Morocco</option>
            <option value="mozambique">Mozambique</option>
            <option value="myanmar">Myanmar</option>
            <option value="namibia">Namibia</option>
            <option value="nauru">Nauru</option>
            <option value="nepal">Nepal</option>
            <option value="netherlands">Netherlands</option>
            <option value="new-zealand">New Zealand</option>
            <option value="nicaragua">Nicaragua</option>
            <option value="niger">Niger</option>
            <option value="nigeria">Nigeria</option>
            <option value="norway">Norway</option>
            <option value="oman">Oman</option>
            <option value="pakistan">Pakistan</option>
            <option value="palau">Palau</option>
            <option value="panama">Panama</option>
            <option value="papua-new-guinea">Papua New Guinea</option>
            <option value="paraguay">Paraguay</option>
            <option value="peru">Peru</option>
            <option value="philippines">Philippines</option>
            <option value="poland">Poland</option>
            <option value="portugal">Portugal</option>
            <option value="qatar">Qatar</option>
            <option value="romania">Romania</option>
            <option value="russia">Russia</option>
            <option value="rwanda">Rwanda</option>
            <option value="saint-kitts-and-nevis">Saint Kitts and Nevis</option>
            <option value="saint-lucia">Saint Lucia</option>
            <option value="saint-vincent-and-the-grenadines">Saint Vincent and the Grenadines</option>
            <option value="samoa">Samoa</option>
            <option value="san-marino">San Marino</option>
            <option value="sao-tome-and-principe">Sao Tome and Principe</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="senegal">Senegal</option>
            <option value="serbia">Serbia</option>
            <option value="seychelles">Seychelles</option>
            <option value="sierra-leone">Sierra Leone</option>
            <option value="singapore">Singapore</option>
            <option value="slovakia">Slovakia</option>
            <option value="slovenia">Slovenia</option>
            <option value="solomon-islands">Solomon Islands</option>
            <option value="somalia">Somalia</option>
            <option value="south-africa">South Africa</option>
            <option value="south-sudan">South Sudan</option>
            <option value="spain">Spain</option>
            <option value="sri-lanka">Sri Lanka</option>
            <option value="sudan">Sudan</option>
            <option value="suriname">Suriname</option>
            <option value="swaziland">Swaziland</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="syria">Syria</option>
            <option value="taiwan">Taiwan</option>
            <option value="tajikistan">Tajikistan</option>
            <option value="tanzania">Tanzania</option>
            <option value="thailand">Thailand</option>
            <option value="togo">Togo</option>
            <option value="tonga">Tonga</option>
            <option value="trinidad-and-tobago">Trinidad and Tobago</option>
            <option value="tunisia">Tunisia</option>
            <option value="turkey">Turkey</option>
            <option value="turkmenistan">Turkmenistan</option>
            <option value="tuvalu">Tuvalu</option>
            <option value="uganda">Uganda</option>
            <option value="ukraine">Ukraine</option>
            <option value="united-arab-emirates">United Arab Emirates</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="united-states">United States</option>
            <option value="uruguay">Uruguay</option>
            <option value="uzbekistan">Uzbekistan</option>
            <option value="vanuatu">Vanuatu</option>
            <option value="vatican-city">Vatican City</option>
            <option value="venezuela">Venezuela</option>
            <option value="vietnam">Vietnam</option>
            <option value="yemen">Yemen</option>
            <option value="zambia">Zambia</option>
            <option value="zimbabwe">Zimbabwe</option>
          </select>     
        </div>
        
        <div className='form-group'>
          <span>Picture</span>
          <input class="form-field" id="picture" type="file" placeholder="Cluj-Napoca" required></input>
        </div>
        </div>

        <div className='spaced'>
          <button type="submit">Create Account</button>
        </div>
      </form>
      </div>
    </>
  )
}

export default App
