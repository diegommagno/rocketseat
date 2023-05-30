import { Container } from './styles';

import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { ButtonBack } from '../../components/ButtonBack';
import { Section } from '../../components/Section';

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <a href="/">
          <ButtonBack />
        </a>

        <div className="movie-header">
          <h1>Interestellar</h1>
          <div className="rating">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3907 18.2503C15.2591 18.2508 15.1308 18.2098 15.0239 18.1331L10.0001 14.4909L4.97624 18.1331C4.86891 18.211 4.7396 18.2526 4.60701 18.2522C4.47442 18.2517 4.34542 18.209 4.23866 18.1304C4.1319 18.0518 4.05291 17.9413 4.01311 17.8148C3.9733 17.6883 3.97476 17.5524 4.01725 17.4269L5.97663 11.6233L0.898504 8.14092C0.788508 8.06557 0.70549 7.95702 0.661579 7.83113C0.617668 7.70524 0.615165 7.56861 0.654436 7.4412C0.693707 7.31379 0.772694 7.20227 0.879856 7.12294C0.987018 7.04362 1.11674 7.00064 1.25007 7.00029H7.51491L9.40553 1.18193C9.44626 1.05632 9.52573 0.946827 9.63254 0.869174C9.73935 0.791522 9.86801 0.749695 10.0001 0.749695C10.1321 0.749695 10.2608 0.791522 10.3676 0.869174C10.4744 0.946827 10.5539 1.05632 10.5946 1.18193L12.4852 7.00224H18.7501C18.8836 7.00218 19.0136 7.04486 19.121 7.12403C19.2285 7.2032 19.3078 7.31471 19.3474 7.44222C19.3869 7.56973 19.3845 7.70654 19.3407 7.83262C19.2968 7.9587 19.2137 8.06743 19.1036 8.14287L14.0235 11.6233L15.9817 17.4253C16.0134 17.5192 16.0224 17.6194 16.0077 17.7174C15.9931 17.8155 15.9554 17.9087 15.8976 17.9893C15.8399 18.0699 15.7638 18.1356 15.6757 18.181C15.5875 18.2263 15.4898 18.2501 15.3907 18.2503Z" fill="#FF859B"/>
            </svg>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3907 18.2503C15.2591 18.2508 15.1308 18.2098 15.0239 18.1331L10.0001 14.4909L4.97624 18.1331C4.86891 18.211 4.7396 18.2526 4.60701 18.2522C4.47442 18.2517 4.34542 18.209 4.23866 18.1304C4.1319 18.0518 4.05291 17.9413 4.01311 17.8148C3.9733 17.6883 3.97476 17.5524 4.01725 17.4269L5.97663 11.6233L0.898504 8.14092C0.788508 8.06557 0.70549 7.95702 0.661579 7.83113C0.617668 7.70524 0.615165 7.56861 0.654436 7.4412C0.693707 7.31379 0.772694 7.20227 0.879856 7.12294C0.987018 7.04362 1.11674 7.00064 1.25007 7.00029H7.51491L9.40553 1.18193C9.44626 1.05632 9.52573 0.946827 9.63254 0.869174C9.73935 0.791522 9.86801 0.749695 10.0001 0.749695C10.1321 0.749695 10.2608 0.791522 10.3676 0.869174C10.4744 0.946827 10.5539 1.05632 10.5946 1.18193L12.4852 7.00224H18.7501C18.8836 7.00218 19.0136 7.04486 19.121 7.12403C19.2285 7.2032 19.3078 7.31471 19.3474 7.44222C19.3869 7.56973 19.3845 7.70654 19.3407 7.83262C19.2968 7.9587 19.2137 8.06743 19.1036 8.14287L14.0235 11.6233L15.9817 17.4253C16.0134 17.5192 16.0224 17.6194 16.0077 17.7174C15.9931 17.8155 15.9554 17.9087 15.8976 17.9893C15.8399 18.0699 15.7638 18.1356 15.6757 18.181C15.5875 18.2263 15.4898 18.2501 15.3907 18.2503Z" fill="#FF859B"/>
            </svg>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3907 18.2503C15.2591 18.2508 15.1308 18.2098 15.0239 18.1331L10.0001 14.4909L4.97624 18.1331C4.86891 18.211 4.7396 18.2526 4.60701 18.2522C4.47442 18.2517 4.34542 18.209 4.23866 18.1304C4.1319 18.0518 4.05291 17.9413 4.01311 17.8148C3.9733 17.6883 3.97476 17.5524 4.01725 17.4269L5.97663 11.6233L0.898504 8.14092C0.788508 8.06557 0.70549 7.95702 0.661579 7.83113C0.617668 7.70524 0.615165 7.56861 0.654436 7.4412C0.693707 7.31379 0.772694 7.20227 0.879856 7.12294C0.987018 7.04362 1.11674 7.00064 1.25007 7.00029H7.51491L9.40553 1.18193C9.44626 1.05632 9.52573 0.946827 9.63254 0.869174C9.73935 0.791522 9.86801 0.749695 10.0001 0.749695C10.1321 0.749695 10.2608 0.791522 10.3676 0.869174C10.4744 0.946827 10.5539 1.05632 10.5946 1.18193L12.4852 7.00224H18.7501C18.8836 7.00218 19.0136 7.04486 19.121 7.12403C19.2285 7.2032 19.3078 7.31471 19.3474 7.44222C19.3869 7.56973 19.3845 7.70654 19.3407 7.83262C19.2968 7.9587 19.2137 8.06743 19.1036 8.14287L14.0235 11.6233L15.9817 17.4253C16.0134 17.5192 16.0224 17.6194 16.0077 17.7174C15.9931 17.8155 15.9554 17.9087 15.8976 17.9893C15.8399 18.0699 15.7638 18.1356 15.6757 18.181C15.5875 18.2263 15.4898 18.2501 15.3907 18.2503Z" fill="#FF859B"/>
            </svg>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3907 18.2503C15.2591 18.2508 15.1308 18.2098 15.0239 18.1331L10.0001 14.4909L4.97624 18.1331C4.86891 18.211 4.7396 18.2526 4.60701 18.2522C4.47442 18.2517 4.34542 18.209 4.23866 18.1304C4.1319 18.0518 4.05291 17.9413 4.01311 17.8148C3.9733 17.6883 3.97476 17.5524 4.01725 17.4269L5.97663 11.6233L0.898504 8.14092C0.788508 8.06557 0.70549 7.95702 0.661579 7.83113C0.617668 7.70524 0.615165 7.56861 0.654436 7.4412C0.693707 7.31379 0.772694 7.20227 0.879856 7.12294C0.987018 7.04362 1.11674 7.00064 1.25007 7.00029H7.51491L9.40553 1.18193C9.44626 1.05632 9.52573 0.946827 9.63254 0.869174C9.73935 0.791522 9.86801 0.749695 10.0001 0.749695C10.1321 0.749695 10.2608 0.791522 10.3676 0.869174C10.4744 0.946827 10.5539 1.05632 10.5946 1.18193L12.4852 7.00224H18.7501C18.8836 7.00218 19.0136 7.04486 19.121 7.12403C19.2285 7.2032 19.3078 7.31471 19.3474 7.44222C19.3869 7.56973 19.3845 7.70654 19.3407 7.83262C19.2968 7.9587 19.2137 8.06743 19.1036 8.14287L14.0235 11.6233L15.9817 17.4253C16.0134 17.5192 16.0224 17.6194 16.0077 17.7174C15.9931 17.8155 15.9554 17.9087 15.8976 17.9893C15.8399 18.0699 15.7638 18.1356 15.6757 18.181C15.5875 18.2263 15.4898 18.2501 15.3907 18.2503Z" fill="#FF859B"/>
            </svg>
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 1.75C10.2708 1.75 10.5108 1.92433 10.5944 2.18182L12.4854 8H18.75C19.024 8 19.2659 8.17835 19.347 8.43998C19.4281 8.70161 19.3294 8.98555 19.1035 9.14046L14.0247 12.6231L15.9829 18.4251C16.0698 18.6828 15.9802 18.9671 15.7612 19.1283C15.5422 19.2895 15.2441 19.2907 15.0239 19.1311L10 15.4906L4.97616 19.1311C4.75596 19.2907 4.45787 19.2895 4.23888 19.1283C4.0199 18.9671 3.93028 18.6828 4.01724 18.4251L5.97543 12.6231L0.896591 9.14046C0.670692 8.98555 0.571975 8.70161 0.653061 8.43998C0.734146 8.17835 0.976139 8 1.25005 8H7.51474L9.40565 2.18182C9.48933 1.92433 9.7293 1.75 10 1.75ZM10 4.39709L8.56319 8.81818C8.47951 9.07567 8.23955 9.25 7.9688 9.25H3.26667L7.07225 11.8595C7.30291 12.0177 7.40041 12.3099 7.31098 12.5749L5.82744 16.9705L9.63331 14.2127C9.8521 14.0541 10.148 14.0541 10.3668 14.2127L14.1727 16.9705L12.6891 12.5749C12.5997 12.3099 12.6972 12.0177 12.9278 11.8595L16.7334 9.25H12.0313C11.7605 9.25 11.5206 9.07567 11.4369 8.81818L10 4.39709Z" fill="#FF859B"/>
            </svg>
          </div>

        </div>

        <Section>
          <Tag title="Ficção Científica" />
          <Tag title="Drama" />
          <Tag title="Família" />
        </Section>

        <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As missões Lázaro enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
          Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
        </p>
      </main>
    </Container>
  );
}