import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
    return (
<>
<nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">pordhub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">หน้าเเรก</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/Service">บริการของเรา3</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" href="/contect">ติดต่อเรา</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">ค้นหา</button>
      </form>
    </div>
  </div>
</nav>

<center className='mt-2'>
    <Link href="/" className='btn btn-primary'>  หน้าเเรก  </Link>   
    <Link href="/about" className='btn btn-primary'>  เกี่ยวกับเรา  </Link>
    <Link href="/Service" className='btn btn-primary'>  บริการของเรา  </Link>
    <Link href="/contect" className='btn btn-primary'>  คิดต่อเรา  </Link>
</center>
</>
    );
}