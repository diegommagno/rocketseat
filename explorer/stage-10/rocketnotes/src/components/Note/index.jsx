import PropsTypes from 'prop-types';
import { Container } from './styles';
import { Tag } from '../Tag';

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}

Note.propTypes = {
  data: PropsTypes.shape({
    title: PropsTypes.string,
    tags: PropsTypes.arrayOf(
      PropsTypes.shape({
        id: PropsTypes.string,
        name: PropsTypes.string,
      })
    )
  }),
}