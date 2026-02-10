// Data for each research direction
const researchData = [
    {
        id: 'chart-ad',
        name: 'Autonomous Driving',
        subtitle: 'Computer Science',
        percentage: 25,
        color: '#FF6384',
        profiles: 12,
        units: 5,
        output: 47,
        projects: 8
    },
    {
        id: 'chart-mlm',
        name: 'Multimodal AI & LLMs',
        subtitle: 'Computer Science',
        percentage: 22,
        color: '#36A2EB',
        profiles: 15,
        units: 6,
        output: 42,
        projects: 6
    },
    {
        id: 'chart-gm',
        name: 'Generative Models',
        subtitle: 'Computer Science',
        percentage: 20,
        color: '#FFCE56',
        profiles: 14,
        units: 5,
        output: 38,
        projects: 5
    },
    {
        id: 'chart-vqa',
        name: 'Video Quality Assessment',
        subtitle: 'Computer Science',
        percentage: 15,
        color: '#4BC0C0',
        profiles: 8,
        units: 3,
        output: 28,
        projects: 3
    },
    {
        id: 'chart-eai',
        name: 'Embodied AI',
        subtitle: 'Computer Science',
        percentage: 12,
        color: '#9966FF',
        profiles: 9,
        units: 4,
        output: 22,
        projects: 4
    },
    {
        id: 'chart-other',
        name: 'Other Research',
        subtitle: 'Computer Science',
        percentage: 6,
        color: '#FF9F40',
        profiles: 5,
        units: 2,
        output: 12,
        projects: 2
    }
];

// Initialize all research direction charts
document.addEventListener('DOMContentLoaded', function () {
    // Get or create the shared dropdown container
    let dropdownContainer = document.getElementById('researchDropdownContainer');

    // If container doesn't exist, create it
    if (!dropdownContainer) {
        dropdownContainer = document.createElement('div');
        dropdownContainer.id = 'researchDropdownContainer';
        dropdownContainer.className = 'research-dropdown-container';

        // Try to find the research charts wrapper or body and insert before end
        const chartsWrapper = document.querySelector('.research-charts-wrapper');
        if (chartsWrapper) {
            chartsWrapper.appendChild(dropdownContainer);
        } else {
            document.body.appendChild(dropdownContainer);
        }
    }

    researchData.forEach(function (data) {
        const element = document.getElementById(data.id);
        if (element) {
            const ctx = element.getContext('2d');
            const canvasContainer = element.closest('.research-chart-item');

            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Research Focus', 'Other'],
                    datasets: [{
                        data: [data.percentage, 100 - data.percentage],
                        backgroundColor: [data.color, '#e8e8e8'],
                        borderColor: [data.color, '#e8e8e8'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    if (context.dataIndex === 0) {
                                        return data.name + ': ' + data.percentage + '%';
                                    }
                                    return 'Other: ' + (100 - data.percentage) + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Add click event to show dropdown in shared container
            canvasContainer.style.cursor = 'pointer';
            canvasContainer.addEventListener('click', function (e) {
                e.stopPropagation();
                showResearchDropdown(data, dropdownContainer, canvasContainer);
            });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.research-chart-item') && !e.target.closest('.research-dropdown-container')) {
            clearDropdown(dropdownContainer);
        }
    });
});

// Show research dropdown in shared container
function showResearchDropdown(data, container, chartItem) {
    // Clear previous content
    container.innerHTML = '';

    // Create dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'research-dropdown show';
    dropdown.style.borderTopColor = data.color;

    // Calculate position based on chart item's location
    if (chartItem) {
        const chartRect = chartItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Horizontal: center under the chart
        const chartCenterX = chartRect.left - containerRect.left + chartRect.width / 2;
        dropdown.style.left = chartCenterX + 'px';
        dropdown.style.transform = 'translateX(-50%)';

        // Vertical: align with bottom of chart with small gap
        const topPosition = chartRect.bottom - containerRect.top + 5;
        dropdown.style.top = topPosition + 'px';
    }
    dropdown.innerHTML = `
        <div class="research-dropdown-item" data-type="profiles">
            <div class="research-dropdown-icon" style="background-color: ${data.color}">
                <i class="fas fa-user-circle"></i>
            </div>
            <div class="research-dropdown-text">
                <div class="research-dropdown-label">Profiles</div>
                <div class="research-dropdown-value">${data.profiles}</div>
            </div>
        </div>
        <div class="research-dropdown-item" data-type="units">
            <div class="research-dropdown-icon" style="background-color: ${data.color}">
                <i class="fas fa-building"></i>
            </div>
            <div class="research-dropdown-text">
                <div class="research-dropdown-label">Research units</div>
                <div class="research-dropdown-value">${data.units}</div>
            </div>
        </div>
        <div class="research-dropdown-item" data-type="output">
            <div class="research-dropdown-icon" style="background-color: ${data.color}">
                <i class="fas fa-book"></i>
            </div>
            <div class="research-dropdown-text">
                <div class="research-dropdown-label">Research output</div>
                <div class="research-dropdown-value">${data.output}</div>
            </div>
        </div>
        <div class="research-dropdown-item" data-type="projects">
            <div class="research-dropdown-icon" style="background-color: ${data.color}">
                <i class="fas fa-project-diagram"></i>
            </div>
            <div class="research-dropdown-text">
                <div class="research-dropdown-label">Projects</div>
                <div class="research-dropdown-value">${data.projects}</div>
            </div>
        </div>
    `;

    container.appendChild(dropdown);

    // Add click handlers to dropdown items
    dropdown.querySelectorAll('.research-dropdown-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const type = item.getAttribute('data-type');
            handleDropdownItemClick(type, data);
        });
    });
}

// Clear dropdown
function clearDropdown(container) {
    if (container) {
        container.innerHTML = '';
    }
}

// Handle dropdown item click (prepare for future hyperlink feature)
function handleDropdownItemClick(type, data) {
    // This function is ready for future enhancement with actual hyperlinks
    console.log('Clicked:', type, 'for', data.name);
    // Future: navigate to related page or filter results
}
