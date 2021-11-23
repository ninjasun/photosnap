import cane from '../../images/cane.jpg'
import bimbo from '../../images/bimbo.jpg'

const profiles = [
  {
    name: 'bimboo',
    img: bimbo,
    id: 1
  },
  {
    name: 'Cane',
    img: cane,
    id: 2
  },
  {
    name: 'bimboo',
    img: bimbo,
    id: 3
  },
  {
    name: 'Cane',
    img: cane,
    id: 4
  }
]
function ProfilesCarousel () {
  return (
    <div
      style={{
        background: 'rgba(var(--d87,255,255,255),1)',
        border: '1px solid rgba(var(--b6a,219,219,219),1)',
        borderRadius: 3,
        marginBottom: 24,
        marginTop: 0,
        padding: '16px 0'
      }}
    >
      <div style={{ height: 84, outline: 0, overflowY: 'hidden' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div
            style={{ overflowX: 'auto', overflowY: 'hidden' }}
            role='presentation'
          >
            <div style={{ marginLeft: 20 }}>
              <ul style={{ flexDirection: 'row', display: 'flex' }}>
                {profiles.map(item => (
                  <ProfileCard key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export { ProfilesCarousel }

function ProfileCard ({ name, img, id }) {
  return (
    <li>
      <div
        style={{
          height: 122,
          padding: '0 4ox',
          top: 2,
          width: 80
        }}
      >
        <button
          style={{
            width: 64,
            alignItems: 'center',
            alignSelf: 'center',
            background: '0 0',
            border: 0,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: 0,
            paddingTop: 0,
            textAlign: 'center'
          }}
          role='menuitem'
        >
          <div style={{ marginTop: 8, marginBottom: 4 }}>
            <img
              style={{ width: 56, height: 56, borderRadius: '50%' }}
              src={img}
            />
            <span style={{ letterSpacing: '.01em', maxWidth: 74 }}>{name}</span>
          </div>
        </button>
      </div>
    </li>
  )
}
