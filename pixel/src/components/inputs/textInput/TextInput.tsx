import './text_input.scss'

interface TextInputProps {
  type: 'text' | 'password' | 'email' | 'number'
  id: string
  label?: string
  name?: string
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
  error?: string
  width?: number | string
  height?: number | string

}

const TextInput = ({type, width, height}: TextInputProps) => {
  return (
    <div id="text-input-container">
      {
        type === 'text' || 'email' ? (

          <div className="typeOne">
            <input 
              type={type} 
              style={{
                  width: width ? width : '100%',
                  height: height ? height : 40
              }} 
            />
          </div>

        ):
        type === 'password' ? (
          <></>
        ):
        type === 'number' ? (
          <></>
        ):
        <code>error type</code>
      }
    </div>
  )
}

export default TextInput