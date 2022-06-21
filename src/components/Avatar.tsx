import styles from '../styles/components/Avatar.module.css';

type AvatarProps = {
  src: string;
  hasBorder?: boolean;
};

function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={styles[hasBorder ? 'avatarWithBorder' : 'avatarWithoutBorder']}
      src={src}
    />
  );
}

export { Avatar };
