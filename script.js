const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Validation() {
    const emailInput = document.querySelector('.email').value;
    const statusMessage = document.querySelector('.status');

    if (regex.test(emailInput)) {
        statusMessage.textContent = 'Email hợp lệ!';
        statusMessage.style.color = 'green';
        setTimeout(() => {
        statusMessage.textContent = 'Đang mở khóa nội dung...';
        statusMessage.style.color = 'blue';
        }, 500);
        // Execute logic to unlock content
        setTimeout(() => {
            unlock();
        }, 1000); // Giả lập thời gian mở khóa nội dung
    } else {
        statusMessage.textContent = 'Email không hợp lệ!';
        statusMessage.style.color = 'red';
    }
}

function unlock() {
    const content = document.querySelector('.content');
    content.style.display = 'block'; // Hiển thị nội dung
    content.style.opacity = '1'; // Đảm bảo nội dung có thể nhìn thấy
    content.style.transition = 'opacity 0.5s ease-in-out'; // Thêm hiệu ứng chuyển tiếp
    document.querySelector('.email').style.display = 'none'; // Ẩn trường nhập email
    document.querySelector('.info-3').style.display = 'none'; // Ẩn thông tin trạng thái
}

const general = document.querySelectorAll('.general');
const expandButton = document.querySelector('.expand');
expandButton.addEventListener('click', expand);

for (let i = 0; i < general.length; i++) {
    general[i].addEventListener('click', function () {
        // Collapse all containers except the one being clicked
        for (let j = 0; j < general.length; j++) {
            if (j !== i) {
                const otherDetails = general[j].querySelector('.collapse');
                otherDetails.style.display = 'none';
                general[j].querySelector('.expand').innerHTML = '<span class="icon-down-circled">Details</span>';
                general[j].style.height = '200px';
            }
        }
        // Toggle the clicked container
        const details = this.querySelector('.collapse');
        if (details.style.display === 'block') {
            details.style.display = 'none';
            this.querySelector('.expand').innerHTML = '<span class="icon-down-circled">Details</span>';
            general[i].style.height = '200px';
            expandButton[i].style.display = 'none'; // Ẩn nút mở rộng
        } else {
            details.style.display = 'block';
            this.querySelector('.expand').innerHTML = '<span class="icon-up-circled">Hide Details</span>';
            general[i].style.height = '500px';
            expandButton[i].style.display = 'block'; // Hiển thị nút mở rộng
        }
    });
}

function expand() {
    const expandText = document.querySelector('.expand-text');
    if (expandText.style.display === 'block') {
        expandText.style.display = 'none';
        this.innerHTML = '<span class="icon-down-circled">Details</span>';
    } else {
        expandText.style.display = 'block';
        this.innerHTML = '<span class="icon-up-circled">Hide Details</span>';
    }
}