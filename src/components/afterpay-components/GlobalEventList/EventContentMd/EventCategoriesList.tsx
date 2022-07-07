interface EventCategoriesListProps {
  categories: string[];
}

const EventCategoriesList = (props: EventCategoriesListProps) => {
  return (
    <div className="categories-list">
      {props.categories.map((category) => {
        return (
          <p key={category} className="tag-item">
            {category}
          </p>
        );
      })}
    </div>
  );
};
export default EventCategoriesList;
