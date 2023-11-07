import React, {Component} from 'react'
import Navbar from '../Fragments/Navbar'
import Footer from '../Fragments/Footer'
import ProfileCard from '../Elements/ProfileCard'
import TeamButton from '../Elements/TeamButton'

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
            <p className="text-center text-white flex justify-center pt-12 text-5xl">This Highlight Is For Sale</p>
          </div>
          <div className="h-1/5 pt-10 px-10 flex">
            <TeamButton onClick={this.toggleDivs1} title="Main Leading And" subtitle="Management Team" width='w-1/4' />
            <TeamButton onClick={this.toggleDivs2} title="Sensor Experts And" subtitle="Hardwares" width='w-1/4' />
            <TeamButton onClick={this.toggleDivs3} title="Web And Genius" subtitle="Architectures" width='w-1/4' />
            <TeamButton onClick={this.toggleDivs4} title="Human Modelling And" subtitle="Design Soloist" width='w-1/4' />
          </div>

              {/* Show setState Here  */}
            {this.state.initialDivs && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="Wildan Muhammad YF, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/wildan.png" />
              <ProfileCard name="Nadya Nanda Adisti H, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/nadya.png" />
              <ProfileCard name="Andika Fahrezi, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/dika.png" />
            </div>
            )}

            {this.state.showDivs1 && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="Wildan Muhammad YF, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/wildan.png" />
              <ProfileCard name="Nadya Nanda Adisti H, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/nadya.png" />
              <ProfileCard name="Andika Fahrezi, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/dika.png" />
          </div>
            )}

            {this.state.showDivs2 && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="M Abyan Wibowo" study="D3 Teknologi Komputer" imgSrc="/images/bowo.png" />
              <ProfileCard name="Brian Arthur William" study="D3 Teknologi Komputer" imgSrc="/images/brian.png" />
              <ProfileCard name="Ayumi Clara S" study="D3 Teknologi Komputer" imgSrc="/images/ayumi.png" />
              <ProfileCard name="M Ramadhan Al Bukhori" study="D3 Teknologi Komputer" imgSrc="/images/al.png" />
              <ProfileCard name="Waskito JA Dawam" study="D3 Teknologi Komputer" imgSrc="/images/waskito.png" />
              <ProfileCard name="Angelica Sitorus, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/angel.png" />
            </div>
            )}
          
          {this.state.showDivs3 && (
          <div className="flex w-full h-3/5 justify-center items-center">
            <ProfileCard name="M Ghifar Rijali, A.md.T." study="Alumni" imgSrc="/images/ghifar.png" />
            <ProfileCard name="Fathurrochman N, A.md.T." study="S1 Teknik Rekayasa Multimedia" imgSrc="/images/fathur.png" />
            <ProfileCard name="M Aulia Rifqi Z" study="D3 Teknologi Komputer" imgSrc="/images/rifqi.png" />

        </div>
            )}

          {this.state.showDivs4 && (
          <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="Zaidan Mufid Wibawa" study="S1 Desain Produk" imgSrc="/images/zaidan.png" />
              <ProfileCard name="Aldi" study="S1 Desain Produk" imgSrc="" />
        </div>
          )}
        </div>
        <Footer></Footer>
    </div>
  )
  }
}

export default Student