import css from './CustomIconForCalendar.module.css';
import { forwardRef } from 'react';

const CustomIconForCalendar = forwardRef(({ value, onClick }, ref) => {
    return (
        <div className={css.calendarWrapper}>
            <button type="button" ref={ref} value={value} onClick={onClick} className={css.dateIconInput}>
                {value}
                <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#734AEF' }}>
                    <path d="M12 14.667h-2.667v2.667h2.667v-2.667zM17.333 14.667h-2.667v2.667h2.667v-2.667zM22.667 14.667h-2.667v2.667h2.667v-2.667zM25.333 5.333h-1.333v-2.667h-2.667v2.667h-10.667v-2.667h-2.667v2.667h-1.333c-1.48 0-2.653 1.2-2.653 2.667l-0.013 18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667zM25.333 26.667h-18.667v-14.667h18.667v14.667z" />
                </svg>
            </button>
        </div>
    );
});

CustomIconForCalendar.displayName = 'CustomIconForCalendar';

export default CustomIconForCalendar;