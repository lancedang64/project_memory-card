export interface TypeCard {
  name: string;
  imgSrc: string;
}

export interface TypeCardComponent extends TypeCard {
  handleClick: any;
}

export type TypeDifficulty = 'easy' | 'medium' | 'hard';

export interface CardEvent extends React.MouseEventHandler<HTMLImageElement> {
  target: {
    id: string;
  };
}
