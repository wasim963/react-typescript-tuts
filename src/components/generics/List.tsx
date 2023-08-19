type ListProps<T> = {
    items: T[],
    onClick: ( value: T ) => void
}

export const List1 = <T extends {}>( { items, onClick }: ListProps<T> ) => {
    return (
        <div>
            <h2>List Of Items</h2>
            {
                items?.map((item, index) => {
                    return (
                        <div key={index} onClick={ () => onClick( item )} >
                            <>{item}</>
                      </div>
                    )
                } )
            }
      </div>
    )
  }

export const List = <T extends { id: number }>( { items, onClick }: ListProps<T> ) => {
  return (
      <div>
          <h2>List Of Items</h2>
          {
              items?.map((item, index) => {
                  return (
                      <div key={item?.id} onClick={ () => onClick( item )} >
                          {item?.id}
                    </div>
                  )
              } )
          }
    </div>
  )
}
