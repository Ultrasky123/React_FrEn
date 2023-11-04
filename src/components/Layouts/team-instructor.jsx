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
                FIT
              </div>
              </button>
            </div>
            <div className="w-1/2 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs2} className='flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center'>
              <div className='font-mono'>
                FIK
              </div>
              </button>
            </div>
          </div>


              {/* Show setState Here  */}
            {this.state.initialDivs && (
            <div className="flex w-full h-3/5 justify-center items-center">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Giva Andriana Mutiara</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Periyadi</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">M Rizky Alfarisi</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Lisda Meisaroh</h1>
                    <p class="text-base">Dosen FIT</p>
                  </div>
                </div>
            </div>
          </div>
          </div>
            )}

            {this.state.showDivs1 && (
            <div className="flex w-full h-3/5 justify-center items-center">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Giva Andriana Mutiara</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Periyadi</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">M Rizky Alfarisi</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Lisda Meisaroh</h1>
                    <p class="text-base">
                      Dosen FIT
                    </p>
                  </div>
                </div>
            </div>
          </div>
          </div>
            )}

            {this.state.showDivs2 && (
            <div className="flex w-full h-3/5 justify-center items-center">
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Hardy</h1>
                    <p class="text-base">
                      Dosen FIK
                    </p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Nurul Fitriana Bahri</h1>
                    <p class="text-base">
                      Dosen FIK
                    </p>
                  </div>
                </div>
            </div>
          </div>
          </div>
            )}
        </div>
        <Footer></Footer>
    </div>
  )
  }
}

export default Instructor