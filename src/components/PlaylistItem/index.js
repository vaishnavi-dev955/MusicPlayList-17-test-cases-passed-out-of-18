import './index.css'

const PlayListItem = props => {
  const {PlayListItemData, onDeleteTrack} = props
  const {imageUrl, name, genre, duration, id} = PlayListItemData

  const onClickDeleteButton = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="list-item">
      <div className="over-all-container">
        <img src={imageUrl} alt="track" className="Song-image-style" />
        <div>
          <p className="title">{name}</p>
          <p className="description">{genre}</p>
        </div>
      </div>
      <div className="sub-container1">
        <p className="Time-description">{duration}</p>
        <button
          className="delete-button"
          data-testid="delete"
          type="button"
          onClick={onClickDeleteButton}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd1i2RKfm2ucTd5dxJzA_rIrrI4cCaHzmwfrnsT6iWiy_5wrm8GcKAUSr3RzgW_sWPB8&usqp=CAU"
            alt="delete"
            className="delete-style"
          />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
