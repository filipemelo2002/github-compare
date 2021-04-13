import React from 'react';

import { CardHeader, CardBody } from './styles';
import ClayCard from '@clayui/card';
import { MdStarBorder, MdStar } from 'react-icons/md';
import logo from '../../assets/logo.png';
import ClayLabel from '@clayui/label';
import DeleteModal from '../DeleteModal';
import { useDispatch } from 'react-redux';
import * as Actions from '../../redux/action/repository';

interface Props {
  id: number;
  name: string;
  stars: number;
  forks: number;
  openIssues: number;
  age: string;
  lastCommit: string;
  license: string;
  starred: boolean;
  language: string;
}
const Card: React.FC<Props> = ({
  id,
  name,
  stars,
  forks,
  openIssues,
  age,
  lastCommit,
  license,
  language,
  starred,
}) => {
  const dispatch = useDispatch();
  function truncate(source: string, size: number): string {
    return source.length > size ? source.slice(0, size - 1) + '…' : source;
  }
  return (
    <div className="fluid">
      <ClayCard className="max-width">
        <CardHeader>
          <section>
            <img src={logo} width={40} height={40} />
            <h4>{truncate(name, 70)}</h4>
          </section>
          <section id="btn-section">
            <button
              type="button"
              onClick={() => dispatch(Actions.toggleFavortiteRepository(id))}
            >
              {starred ? (
                <MdStar size={23} color="#6B6C7E" />
              ) : (
                <MdStarBorder size={23} color="#6B6C7E" />
              )}
            </button>
            <DeleteModal id={id} />
          </section>
        </CardHeader>
        <CardBody>
          <ul>
            <li>
              <p>
                Stars <span>{stars}</span>
              </p>
            </li>

            <li>
              <p>
                Forks <span>{forks}</span>
              </p>
            </li>

            <li>
              <p>
                Open Issues <span>{openIssues}</span>
              </p>
            </li>
            <li>
              <p>
                Age <span>{age}</span>
              </p>
            </li>
            <li>
              <p>
                Last commit <span>{lastCommit}</span>
              </p>
            </li>
            <li>
              <p>
                License <span>{license}</span>
              </p>
            </li>
          </ul>
          <ClayLabel displayType="warning" className="language">
            {language}
          </ClayLabel>
        </CardBody>
      </ClayCard>
    </div>
  );
};

export default Card;
