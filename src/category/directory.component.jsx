import "./category.styles.scss";
import DirectoryItem from "../components/directory-item/directory-item.component";

const Directory = ({categories}) => {
  return (
    <div className="Directory-container">
      {categories.map(({ title, id, imageUrl }) => {
        return (
          <DirectoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
        );
      })}
    </div>
  );
};


export default Directory