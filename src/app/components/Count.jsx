import React from 'react'

const Count = () => {
  return (
    <form>
        <button className="btn btn-circle btn-outline"
        label="수량"
        input={{
            id:1,
            type:'number',
            min:'1',
            max:'10',
            step:'1',
            defaultValue:'1',
        }}>+ 담기</button>
    </form>
  )
}

export default Count