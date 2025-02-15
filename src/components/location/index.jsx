import arrowImg from "../../assets/next.png"

export default function Location({location, setLocation, handleLocation}) {
    return ( <>
        {/* Formularz */}
        <div className="rounded p-3 m-3" style={{backgroundColor: "rgba(233, 195, 182, 0.7)"}}>
            <div className="form">
                <form>
                  <div className="row">
                    <div className="col-sm-10">
                      <div className="form-group">
                        <label for="location" className="form-label text-success">Miejsce</label>
                        <select className="form-control" id="location" name="location" value={location} onChange={(event) => setLocation(event.target.value)}>
                          <option selected>---Wybierz miejsce---</option> 
                          <option value="bia">Białystok</option>
                          <option value="byd">Bydgoszcz</option>
                          <option value="cze">Częstochowa</option>
                          <option value="gda">Gdańsk</option>
                          <option value="kat">Katowice</option>
                          <option value="kie">Kielce</option>
                          <option value="kra">Kraków</option>
                          <option value="lub">Lublin</option>
                          <option value="lod">Łódź</option>
                          <option value="poz">Poznań</option>
                          <option value="rze">Rzeszów</option>
                          <option value="szc">Szczecin</option>
                          <option value="tor">Toruń</option>
                          <option value="war">Warszawa</option>
                          <option value="wro">Wrocław</option>
                          <option value="zak">Zakopane</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-1">
                      <button type="button" className="btn btn-secondary btn-lg" onClick={handleLocation}>
                        <img src={arrowImg} alt="Arrow" style={{width: "53px"}}/>
                      </button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </>)
}