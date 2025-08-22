<template>
  <div class="system-stats">    
    <div class="system-stats__content">
      <!-- Buffer Manager Usage -->
      <div 
        class="stat-item"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        :title="`Buffer Pool: ${bufferManagerUsage.percentage}% (${formatBytes(bufferManagerUsage.used)} / ${formatBytes(bufferManagerUsage.total)})`"
      >
        <div class="stat-label">
          <i class="fa-solid fa-database"></i>
          <span class="hide-on-collapse">Buffer Pool</span>
        </div>
        <div class="stat-value hide-on-collapse">
          {{ formatBytes(bufferManagerUsage.used) }} / {{ formatBytes(bufferManagerUsage.total) }}
        </div>
        <div class="stat-progress">
          <div 
            class="stat-progress-bar" 
            :style="{ width: bufferManagerUsage.percentage + '%' }"
            :class="{ 'warning': bufferManagerUsage.percentage > 80, 'danger': bufferManagerUsage.percentage > 90 }"
          ></div>
        </div>
        <div class="stat-percentage hide-on-collapse">
          {{ bufferManagerUsage.percentage }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SystemMetricsService from '../utils/SystemMetricsService';

export default {
  name: 'SystemStats',
  data() {
    return {
      bufferManagerUsage: {
        used: 0,
        total: 0,
        percentage: 0
      },
    }
  },
  mounted() {
    this.updateStats();
  },
  beforeUnmount() {
  },
  methods: {
    
    async updateStats() {
      try {
        const metrics = await SystemMetricsService.getMetrics();
        
        this.bufferManagerUsage = {
          used: parseInt(metrics.used) || 0,
          total: parseInt(metrics.total) || 0,
          percentage: parseFloat(metrics.percentage).toFixed(1) || 0
        };
        
        console.log('Updated Buffer Manager Usage:', this.bufferManagerUsage);
      } catch (error) {
        console.warn('Failed to update system stats:', error);
      }
    },
    formatBytes(bytes) {
      if (bytes === 0) return '0 KB';
      const k = 1024;
      const mb = k * k;
      const gb = mb * k;
      
      if (bytes >= gb) {
        return (bytes / gb).toFixed(1) + ' GB';
      } else if (bytes >= mb) {
        return (bytes / mb).toFixed(1) + ' MB';
      } else {
        return (bytes / k).toFixed(1) + ' KB';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.system-stats {
  padding: 1.5rem;
  margin-top: 0.5rem;

  .system-stats__content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: var(--bs-body-text);
    opacity: 0.8;

    i {
      font-size: 0.75rem;
      width: 12px;
    }
  }

  .stat-value {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--bs-body-text);
    margin-left: 1.25rem;
  }

  .stat-progress {
    height: 4px;
    background-color: var(--bs-body-text);
    border-radius: 2px;
    overflow: hidden;
    margin-left: 1.25rem;
    margin-right: 0.5rem;
  }

  .stat-progress-bar {
    height: 100%;
    background-color: var(--bs-primary);
    border-radius: 2px;
    transition: width 0.3s ease, background-color 0.3s ease;

    &.warning {
      background-color: #ffc107;
    }

    &.danger {
      background-color: #dc3545;
    }
  }

  .stat-percentage {
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--bs-body-text);
    margin-left: 1.25rem;
    opacity: 0.8;
  }
}

.wrapper.toggled .system-stats {
  .system-stats__header {
    justify-content: center;
    
    span {
      display: none;
    }
  }

  .stat-label {
    justify-content: center;
    
    span {
      display: none;
    }
  }

  .stat-value {
    display: none;
  }

  .stat-percentage {
    display: none;
  }

  .stat-progress {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>
