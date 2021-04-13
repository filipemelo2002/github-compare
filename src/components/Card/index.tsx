import React from 'react';

import { CardHeader, CardBody } from './styles';
import ClayCard from '@clayui/card';
import { MdStarBorder, MdStar } from 'react-icons/md';
import logo from '../../assets/logo.png';
import ClayLabel from '@clayui/label';
import DeleteModal from '../DeleteModal';

interface Props {
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
  return (
    <div className="col-md-3">
      <ClayCard>
        <CardHeader>
          <section>
            <img src={logo} width={40} height={40} />
            <h4>{name}</h4>
          </section>
          <section id="float-left">
            <button type="button" onClick={() => console.log('start clicked')}>
              {starred ? (
                <MdStar size={23} color="#6B6C7E" />
              ) : (
                <MdStarBorder size={23} color="#6B6C7E" />
              )}
            </button>
            <DeleteModal />
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
            <li>
              {language && (
                <ClayLabel displayType="warning">{language}</ClayLabel>
              )}
            </li>
          </ul>
        </CardBody>
      </ClayCard>
    </div>
  );
};

export default Card;
