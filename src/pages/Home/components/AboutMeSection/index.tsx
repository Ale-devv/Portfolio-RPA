import * as S from "../../style";
import H2 from "../../../../components/H2";
import Circle from "../../../../assets/svgComponents/Circle";

interface AboutMeContract {
    isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeContract) => {
    return (
        <S.Section id="aboutMe">
            <div className="centralizer">
                <H2>Sobre mim</H2>
                <S.AboutMeContainer>
                    <div>
                        <p>
                            Meu nome é Alisson Oliveira e eu sou um apaixonado por
                            tecnologia e inovação que decidiu trilhar o caminho do
                            RPA.
                        </p>
                        <br />
                        <p>
                            Atualmente estou cursando sistemas de informação e tenho um olhar atento
                            para melhoria contínua, focando totalmente no desenvolvimento RPA
                        </p>
                    </div>
                    {!isMobile && (
                        <div className="svgContainer">
                            <Circle />
                        </div>
                    )}
                </S.AboutMeContainer>
            </div>
        </S.Section>
    );
};

export default AboutMeSection;
