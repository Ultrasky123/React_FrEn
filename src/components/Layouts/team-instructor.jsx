import React, {Component} from 'react'
import Navbar from '../Fragments/Navbar'
import Footer from '../Fragments/Footer'

class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDivs1: false,
      showDivs2: false,
      initialDivs: true,
    };
  }

  toggleDivs1 = () => {
    this.setState({
      showDivs1: true,
      showDivs2: false,
      initialDivs: false,
    });
  }

  toggleDivs2 = () => {
    this.setState({
      showDivs1: false,
      showDivs2: true,
      initialDivs: false,
    });
  }

  render() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-full h-screen bg-black">
            <div className="text-white text-center text-4xl flex justify-center items-center h-screen">
              Masa Depan Adalah Milik Mereka
              <br />
              Yang Mempersiapkan Hari Ini
              <br /><br /><br />
              Meet Our Best Instructor
            </div>
            <div className="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div className="quarter-circle"></div>
        <div className="quarter-circle2"></div>
        <div className="w-full h-screen bg-gray-300">
          <div className="bg-black w-full h-1/5">
            <p className="text-center text-white flex justify-center pt-12 text-5xl">A Very Powerful Team Is Among Us</p>
          </div>
          <div className="h-1/5 pt-10 px-10 flex">
            <div className="w-1/2 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs1} className="flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center">
              <div className='font-mono'>
                  Main Leading And
                  <br />
                  Management Team
              </div>
              </button>
            </div>
            <div className="w-1/2 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs2} className='flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center'>
              <div className='font-mono'>
                  Sensor Experts And
                  <br />
                  Hardwares
              </div>
              </button>
            </div>
          </div>


              {/* Show setState Here  */}
            {this.state.initialDivs && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Bu Giva</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Pa Peri</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">
              <span className="text-white">Pa Al</span>
              </div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Bu Lisda</div>
            </div>
            )}

            {this.state.showDivs1 && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Bu Giva</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Pa Peri</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Pa Al</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/4 rounded-full justify-center items-center bg-slate-400">Bu Lisda</div>
            </div>
            )}

            {this.state.showDivs2 && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <div className="w-[250px] h-[250px] mx-auto flex w-1/3 rounded-full justify-center items-center bg-slate-400">Pa Hardy</div>
              <div className="w-[250px] h-[250px] mx-auto flex w-1/3 rounded-full justify-center items-center bg-slate-400">Bu Nurul</div>
            </div>
            )}
        </div>
        <Footer></Footer>
    </div>
  )
  }
}

export default Instructor