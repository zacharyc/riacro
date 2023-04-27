function AcroClass(props: any) {
  return (
    <>
      <dl>
        <div>
          <dt>Location:</dt>
          <dd>{props.location}</dd>
        </div>

        <div>
          <dt>Address:</dt>
          <dd>{props.address}</dd>
        </div>

        <div>
          <dt>Time:</dt>
          <dd>{props.time}</dd>
        </div>

        <div>
          <dt>Level:</dt>
          <dd>{props.level}</dd>
        </div>

        <div>
          <dt>Cost:</dt>
          <dd>{props.cost}</dd>
        </div>

        <div>
          <dt>Teacher:</dt>
          <dd>{props.teacher}</dd>
        </div>
      </dl>
    </>
  );
}

export default AcroClass;
