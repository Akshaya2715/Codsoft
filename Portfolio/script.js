function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById('school-description').style.display = 'none';
document.getElementById('college-description').style.display = 'none';
function toggleDescription(type) {
  const schoolDescription = document.getElementById('school-description');
  const collegeDescription = document.getElementById('college-description');

  if (type === 'school') {
    if (schoolDescription.style.display === 'block') {
      schoolDescription.style.display = 'none';
    } else {
      schoolDescription.style.display = 'block';
      collegeDescription.style.display = 'none';
    }
  } else if (type === 'college') {
    if (collegeDescription.style.display === 'block') {
      collegeDescription.style.display = 'none';
    } else {
      collegeDescription.style.display = 'block';
      schoolDescription.style.display = 'none'; 
    }
  }
}function toggleCertifications(folder) {
  const intraCollegeCerts = document.getElementById('intra-college');
  const onlineCerts = document.getElementById('online-certs');
  const interCerts = document.getElementById('inter-certs');
  
  if (folder === 'intra-college') {
    if (intraCollegeCerts.style.display === 'block') {
      intraCollegeCerts.style.display = 'none';
    } else {
      intraCollegeCerts.style.display = 'block';
      onlineCerts.style.display = 'none';
      interCerts.style.display = 'none';
    }
  } else if (folder === 'online-certs') {
    if (onlineCerts.style.display === 'block') {
      onlineCerts.style.display = 'none';
    } else {
      onlineCerts.style.display = 'block';
      intraCollegeCerts.style.display = 'none';
      interCerts.style.display = 'none';
    }
  } else if (folder === 'inter-certs') {
    if (interCerts.style.display === 'block') {
      interCerts.style.display = 'none';
    } else {
      interCerts.style.display = 'block';
      intraCollegeCerts.style.display = 'none';
      onlineCerts.style.display = 'none';
    }
  }
}


function toggleCertifications(id) {
  const containers = document.querySelectorAll('.certifications-container');
  containers.forEach(container => {
    if (container.id === id) {
      container.style.display = container.style.display === 'none' ? 'flex' : 'none';
    } else {
      container.style.display = 'none';
    }
  });
}
