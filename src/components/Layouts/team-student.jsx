import React, {Component} from 'react'
import Navbar from '../Fragments/Navbar'
import Footer from '../Fragments/Footer'

class Student extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDivs1: false,
      showDivs2: false,
      showDivs3: false,
      showDivs4: false,
      initialDivs: true,
    };
  }

  toggleDivs1 = () => {
    this.setState({
      showDivs1: true,
      showDivs2: false,
      showDivs3: false,
      showDivs4: false,
      initialDivs: false,
    });
  }

  toggleDivs2 = () => {
    this.setState({
      showDivs1: false,
      showDivs2: true,
      showDivs3: false,
      showDivs4: false,
      initialDivs: false,
    });
  }
  toggleDivs3 = () => {
    this.setState({
      showDivs1: false,
      showDivs2: false,
      showDivs3: true,
      showDivs4: false,
      initialDivs: false,
    });
  }
  toggleDivs4 = () => {
    this.setState({
      showDivs1: false,
      showDivs2: false,
      showDivs3: false,
      showDivs4: true,
      initialDivs: false,
    });
  }

  render() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-full h-screen bg-black">
            <div className="text-white text-center text-4xl flex justify-center items-center h-screen">
              Bermimpilah Setinggi Langit
              <br />
              Jika Engkau Jatuh Maka Engkau
              <br />
              Akan Jatuh Diantara Bintang-
              <br />
              Bintang
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
            <div className="w-1/4 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs1} className="flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center">
              <div className='font-mono'>
                  Main Leading And
                  <br />
                  Management Team
              </div>
              </button>
            </div>
            <div className="w-1/4 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs2} className='flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center'>
              <div className='font-mono'>
                  Sensor Experts And
                  <br />
                  Hardwares
              </div>
              </button>
            </div>
            <div className="w-1/4 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs3} className="flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center">
              <div className='font-mono'>
                  Web And Genius 
                  <br />
                  Architectures
              </div>
              </button>
            </div>
            <div className="w-1/4 flex rounded text-center justify-center items-center">
              <button onClick={this.toggleDivs4} className="flex w-[200px] text-white bg-green-700 text-center h-full px-auto rounded-3xl justify-center items-center">
              <div className='font-mono'>
                  Human Modelling And 
                  <br />
                  Design Soloist
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
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/wildan.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Wildan Muhammad YF</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/nadya.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Nadya Nanda Adisti H</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/dika.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Andika Fahrezi</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
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
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/wildan.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Wildan Muhammad YF</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/nadya.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Nadya Nanda Adisti H</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/dika.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Andika Fahrezi</h1>
                    <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
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
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/bowo.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">M Abyan Wibowo</h1>
                    <p class="text-base">D3 Teknologi Komputer</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/brian.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Brian Arthur William</h1>
                    <p class="text-base">D3 Teknologi Komputer</p>
                  </div>
                </div>
            </div>
          </div>
            <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/ayumi.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Ayumi Clara S</h1>
                    <p class="text-base">D3 Teknologi Komputer</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/al.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">M Ramadhan Al Bukhori</h1>
                    <p class="text-base">D3 Teknologi Komputer</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/waskito.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Waskito JA Dawam</h1>
                    <p class="text-base">D3 Teknologi Komputer</p>
                  </div>
                </div>
            </div>
          </div>
          <div class="group h-96 w-80 [perspective:1000px]">
              <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div class="absolute inset-0">
                  <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/angel.png" alt="" />
                </div>
              <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div class="flex min-h-full flex-col items-center justify-center">
                  <h1 class="text-3xl font-bold">Angelica Sitorus</h1>
                    <p class="text-base">S1 Teknik Rekayasa Komputer</p>
                  </div>
                </div>
            </div>
          </div>
          </div>
            )}
          
          {this.state.showDivs3 && (
          <div className="flex w-full h-3/5 justify-center items-center">
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/ghifar.png" alt="" />
              </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">M Ghifar Rijali</h1>
                  <p class="text-base">Alumni</p>
                </div>
              </div>
          </div>
        </div>
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/fathur.png" alt="" />
              </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">Fathurrochman N</h1>
                  <p class="text-base">S1 Teknik Rekayasa Multimedia</p>
                </div>
              </div>
          </div>
        </div>
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/rifqi.png" alt="" />
              </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">M Aulia Rifqi Z</h1>
                  <p class="text-base">D3 Teknologi Komputer</p>
                </div>
              </div>
          </div>
        </div>
        </div>
            )}

          {this.state.showDivs4 && (
          <div className="flex w-full h-3/5 justify-center items-center">
          <div class="group h-96 w-80 [perspective:1000px]">
            <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div class="absolute inset-0">
                <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="/images/zaidan.png" alt="" />
              </div>
            <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div class="flex min-h-full flex-col items-center justify-center">
                <h1 class="text-3xl font-bold">Zaidan Mufid W</h1>
                  <p class="text-base">S1 Desain Produk</p>
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
                <h1 class="text-3xl font-bold">Aldi</h1>
                  <p class="text-base">S1 Desain Produk</p>
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

export default Student