import React, {Component} from 'react'
import Navbar from '../Fragments/Navbar'
import Footer from '../Fragments/Footer'
import ProfileCard from '../Elements/ProfileCard'
import TeamButton from '../Elements/TeamButton'

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
            <p className="text-center text-white flex justify-center pt-12 text-5xl">This Highlight Is For Sale</p>
          </div>
          <div className="h-1/5 pt-10 px-10 flex">
            <TeamButton onClick={this.toggleDivs1} title="FIT" width='w-1/2' />
            <TeamButton onClick={this.toggleDivs2} title="FIK" width='w-1/2' />
          </div>


              {/* Show setState Here  */}
            {this.state.initialDivs && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="Giva Andriana Mutiara, S.T., M.T., Ph.D" study="Dosen FIT" imgSrc="" />
              <ProfileCard name="Periyadi, S.T., M.T." study="Dosen FIT" imgSrc="" />
              <ProfileCard name="M Rizqy Alfarisi, S.ST., M.T." study="Dosen FIT" imgSrc="" />
              <ProfileCard name="Lisda Meisaroh, S.Si., M.T." study="Dosen FIT" imgSrc="" />
          </div>
            )}

            {this.state.showDivs1 && (
            <div className="flex w-full h-3/5 justify-center items-center">
            <ProfileCard name="Giva Andriana Mutiara, S.T., M.T., Ph.D" study="Dosen FIT" imgSrc="" />
            <ProfileCard name="Periyadi, S.T., M.T." study="Dosen FIT" imgSrc="" />
            <ProfileCard name="M Rizqy Alfarisi, S.ST., M.T." study="Dosen FIT" imgSrc="" />
            <ProfileCard name="Lisda Meisaroh, S.Si., M.T." study="Dosen FIT" imgSrc="" />
        </div>
            )}

            {this.state.showDivs2 && (
            <div className="flex w-full h-3/5 justify-center items-center">
              <ProfileCard name="Hardy Adiluhung, S.Sn., M.Sn." study="Dosen FIK" imgSrc="" />
              <ProfileCard name="Nurul Fitriana Bahri, S.Ds., M.Ds." study="Dosen FIK" imgSrc="" />
          </div>
            )}
        </div>
        <Footer></Footer>
    </div>
  )
  }
}

export default Instructor